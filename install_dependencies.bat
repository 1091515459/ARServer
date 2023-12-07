@echo off
echo Installing Node.js dependencies...
cd /d "%~dp0"
npm install express compression
echo Dependencies have been installed.
pause