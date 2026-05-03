@echo off
echo ==========================================
echo     虚拟试衣 AI 工具 - 快速启动
echo ==========================================
echo.

echo [1/3] 检查 Node.js...
node --version
if %errorlevel% neq 0 (
    echo 错误：未找到 Node.js！
    echo 请先从 https://nodejs.org/ 下载并安装 Node.js
    pause
    exit /b 1
)

echo.
echo [2/3] 安装依赖（首次运行需要，可能需要几分钟）...
if not exist "node_modules" (
    call npm install
    if %errorlevel% neq 0 (
        echo.
        echo 错误：依赖安装失败！
        echo 尝试使用国内镜像源重新安装...
        call npm install --registry=https://registry.npmmirror.com
    )
) else (
    echo 依赖已安装，跳过此步骤
)

echo.
echo [3/3] 启动开发服务器...
echo.
echo ==========================================
echo  服务器启动后，请在浏览器打开：
echo  http://localhost:3000
echo ==========================================
echo.
call npm run dev

pause
