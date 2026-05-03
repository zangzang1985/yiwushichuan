@echo off
echo 正在启动开发服务器...
echo 请稍候，服务器启动后会自动打开浏览器

rem 启动开发服务器
start "开发服务器" cmd /c "npm run dev"

rem 等待3秒让服务器启动
ping 127.0.0.1 -n 4 > nul

rem 打开浏览器访问
start http://localhost:3000

echo 服务器已启动，请在浏览器中查看效果
pause