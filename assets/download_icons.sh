#!/bin/bash

# 定义源文件和目标目录
source_file="/Users/KC/KCodes/Docs_App/assets/iconMap.md"
target_dir="/Users/KC/KCodes/Docs_App/assets/downloadsIcon"

# 确保目标目录存在
mkdir -p "$target_dir"

echo "开始从 $source_file 下载图片到 $target_dir"

# 读取源文件并提取图片链接和名称
while IFS= read -r line; do
  if [[ $line =~ \!\[([^\]]*)\]\(([^\)]*)\) ]]; then
    name="${BASH_REMATCH[1]}"
    url="${BASH_REMATCH[2]}"
    
    # 清理文件名，移除不允许的字符
    clean_name=$(echo "$name" | sed 's/[\\\/\*\?:\"\<\>\|]/_/g')
    
    # 处理相对路径
    if [[ $url == icon/* ]]; then
      # 对于本地文件，直接复制
      src_path="/Users/KC/KCodes/Docs_App/assets/$url"
      ext="${url##*.}"
      cp "$src_path" "$target_dir/$clean_name.$ext"
      echo "复制本地文件: $name -> $target_dir/$clean_name.$ext"
    else
      # 确定文件扩展名
      if [[ $url == *.svg* ]]; then
        ext="svg"
      elif [[ $url == *.png* ]]; then
        ext="png"
      elif [[ $url == *.jpg* || $url == *.jpeg* ]]; then
        ext="jpg"
      elif [[ $url == *.webp* ]]; then
        ext="webp"
      else
        # 默认扩展名
        ext="png"
      fi
      
      # 下载远程文件
      echo "下载: $name -> $target_dir/$clean_name.$ext"
      curl -s -L -o "$target_dir/$clean_name.$ext" "$url"
      
      # 检查下载是否成功
      if [ $? -eq 0 ]; then
        echo "✓ 下载成功: $name"
      else
        echo "✗ 下载失败: $name - $url"
      fi
    fi
  fi
done < "$source_file"

echo "\n下载完成！图片已保存到 $target_dir"