@echo off
for /f "tokens=*" %%a in ('dir /b /s /ad') do (
  set "folder=%%a"
  setlocal enabledelayedexpansion
  set "depth=0"
  for /f %%b in ("!folder:\=" "!") do (
    set /a "depth+=1"
  )
  if !depth! leq 3 (
    echo !folder!
  )
  endlocal
)
