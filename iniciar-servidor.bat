@echo off
chcp 65001 >nul
title Pizzaria do Amor - Servidor Local

echo.
echo ============================================================
echo 🍕 PIZZARIA DO AMOR - SERVIDOR LOCAL 🍕
echo ============================================================
echo.
echo 🚀 Iniciando servidor local...
echo.

REM Verifica se Python está instalado
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python não encontrado!
    echo.
    echo 💡 Soluções:
    echo    1. Instale Python de https://python.org
    echo    2. Ou use o arquivo 'iniciar-servidor-node.bat'
    echo.
    pause
    exit /b 1
)

echo ✅ Python encontrado!
echo 🌐 Iniciando servidor na porta 8000...
echo.
echo 💡 Para parar o servidor, feche esta janela ou pressione Ctrl+C
echo.

REM Inicia o servidor Python
python servidor-local.py

echo.
echo 🛑 Servidor parado.
pause
