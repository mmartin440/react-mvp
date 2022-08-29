DROP TABLE IF EXISTS category, mainTodo, subTodo;


CREATE TABLE category (
    id SERIAL PRIMARY KEY, 
    category_task TEXT
);

CREATE TABLE mainTodo (
    id SERIAL PRIMARY KEY, 
    main_todo TEXT, 
    due_date TEXT, 
    category_id INTEGER, 
    FOREIGN KEY(category_id) REFERENCES category(id) ON DELETE CASCADE
); 

CREATE TABLE subTodo (
    id SERIAL, 
    sub_todo TEXT,
    main_id INTEGER, 
    FOREIGN KEY(main_id) REFERENCES mainTodo(id) ON DELETE CASCADE
);

INSERT INTO category (category_task) VALUES ('School');
INSERT INTO category (category_task) VALUES ('Category');

INSERT INTO mainTodo (main_todo, due_date, category_id) VALUES ('Buy a house ', 'August 12, 2022', 1);
INSERT INTO mainTodo (main_todo, due_date, category_id) VALUES ('finish home work', 'September 3, 2022',1);
INSERT INTO mainTodo (main_todo, due_date, category_id) VALUES ('go syke diving ', 'December 10, 1987',2);


INSERT INTO subTodo (sub_todo, main_id) VALUES ('pay insureance ', 1);
INSERT INTO subTodo (sub_todo, main_id) VALUES ('save money', 1);
INSERT INTO subTodo (sub_todo, main_id) VALUES ('math questions', 2);
