DROP TABLE IF EXISTS mainTodo, subTodo;

CREATE TABLE mainTodo (
    id SERIAL PRIMARY KEY, 
    main_todo TEXT, 
    due_date TEXT
); 

CREATE TABLE subTodo (
    id SERIAL, 
    sub_todo TEXT,
    main_id INTEGER, 
    FOREIGN KEY(main_id) REFERENCES mainTodo(id) ON DELETE CASCADE
); 

INSERT INTO mainTodo (main_todo, due_date) VALUES ('Buy a house ', 'August 12, 2022');
INSERT INTO mainTodo (main_todo, due_date) VALUES ('finish home work', 'September 3, 2022');
INSERT INTO mainTodo (main_todo, due_date) VALUES ('go syke diving ', 'December 10, 1987');


INSERT INTO subTodo (sub_todo, main_id) VALUES ('pay insureance ', 1);
INSERT INTO subTodo (sub_todo, main_id) VALUES ('save money', 1);
INSERT INTO subTodo (sub_todo, main_id) VALUES ('math questions', 2);
