#!/usr/bin/env python3
import os
import re
import requests
import urllib.parse
import sys

# 定义源文件和目标目录
source_file = '/Users/KC/KCodes/Docs_App/assets/iconMap.md'
target_dir = '/Users/KC/KCodes/Docs_App/assets/downloadsIcon'

# 确保目标目录存在
os.makedirs(target_dir, exist_ok=True)

# 读取源文件
with open(source_file, 'r', encoding='utf-8') as f:
    content = f.read()

# 使用正则表达式提取所有图片链接和名称
pattern = r'!\[(.*?)\]\((.*?)\)'
matches = re.findall(pattern, content)

print(f"找到 {len(matches)} 个图片链接")

# 下载每个图片
for i, (name, url) in enumerate(matches):
    # 处理相对路径
    if url.startswith('icon/'):
        url = os.path.join(os.path.dirname(source_file), url)
        is_local = True
    else:
        is_local = False
    
    # 清理文件名，移除不允许的字符
    clean_name = re.sub(r'[\\/*?:"<>|]', '_', name)
    
    # 确定文件扩展名
    if is_local:
        # 对于本地文件，保留原始扩展名
        _, ext = os.path.splitext(url)
    else:
        # 对于远程URL，从URL或内容类型推断扩展名
        parsed_url = urllib.parse.urlparse(url)
        path = parsed_url.path
        _, ext = os.path.splitext(path)
        
        # 如果没有扩展名或扩展名不明确，默认为.png
        if not ext or ext == '.svg#gh-light-mode-only':
            ext = '.png'
    
    # 构建目标文件路径
    target_file = os.path.join(target_dir, f"{clean_name}{ext}")
    
    try:
        if is_local:
            # 复制本地文件
            import shutil
            shutil.copy2(url, target_file)
            print(f"[{i+1}/{len(matches)}] 复制本地文件: {name} -> {target_file}")
        else:
            # 下载远程文件
            response = requests.get(url, stream=True, timeout=10)
            response.raise_for_status()
            
            with open(target_file, 'wb') as out_file:
                for chunk in response.iter_content(chunk_size=8192):
                    out_file.write(chunk)
            
            print(f"[{i+1}/{len(matches)}] 下载成功: {name} -> {target_file}")
    
    except Exception as e:
        print(f"[{i+1}/{len(matches)}] 下载失败: {name} - {str(e)}")

print("\n下载完成！")