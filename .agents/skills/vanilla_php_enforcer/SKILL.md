---
name: vanilla_php_enforcer
description: Strict guidelines for building the v0.3.0+ Backend Integration using Vanilla PHP and SQL on cPanel.
---

# Vanilla PHP Enforcer Skill

When performing backend development or database integration tasks for this project (v0.3.0+), you must adhere to the pure Vanilla PHP architecture. This project runs on a standard shared hosting environment (cPanel) and intentionally avoids complex backend frameworks or package managers.

## Core Rules

1. **No Frameworks**: Never use Laravel, Symfony, CodeIgniter, or any other PHP framework.
2. **No Composer**: Do not use Composer or external package dependencies. All code must be written natively.
3. **Database Security (PDO Only)**: All SQL queries MUST use PHP Data Objects (PDO) with strictly prepared statements. Never use `mysqli_*` functions and never interpolate user input directly into SQL strings.
4. **cPanel Compatibility**: Assume the environment is a standard Apache/cPanel server with PHP 8+. Mod_rewrite in `.htaccess` can be used for basic routing if necessary, but keep the folder structure simple.
5. **API First**: The PHP backend should act as an API returning `application/json` responses to the Vanilla JS frontend. Do not use PHP to render HTML views or mix PHP directly into the frontend `src/*.html` files. Keep the frontend static and the backend headless as much as possible.
6. **Stateless Authentication**: When implementing user sessions, prefer simple Token-based authentication or standard secure PHP Session cookies configured for cross-origin API calls if separated from the static host.
