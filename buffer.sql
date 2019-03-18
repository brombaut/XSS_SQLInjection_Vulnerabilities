SELECT (?, ?, ?) FROM ? WHERE ? LIKE '%val%';

SELECT (?, ?, ?) FROM ? WHERE ? LIKE '%' UNION (SELECT 1, 2, 3 FROM dual); -- %';