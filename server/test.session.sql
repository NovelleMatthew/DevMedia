-- @block
-- Create's the Users table
CREATE TABLE Rooms(
    id INT AUTO_INCREMENT,
    account VARCHAR(255) NOT NULL UNIQUE,
    owner_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (owner_id) REFERENCES Users(id)
);





-- @block
-- Removes any table
DROP TABLE Rooms;-- <-- Add table name here

-- @block
-- Add rows of data
INSERT INTO Users (username, email, password)
VALUES(
    'NovelleWebDev',
    'novellematthewcontact@gmail.com',
    'Novelle12'
);

-- @block
-- Add multiple row of data
INSERT INTO Users (username, email, password)
VALUES 
    ('Jake', 'jake54312@gmail.com', 'Jake12'),
    ('Max', 'max54312@gmail.com', 'Max12');

-- @block
-- Read all data in that table
SELECt * FROM rooms;

-- @block
-- Read all data in that table with the filtered columns selected
SELECT id, email, password FROM Users

-- Filters out rows with logic
WHERE email = 'novellematthewcontact@gmail.com'

-- Logical AND, OR
AND id >= 1

-- Orders the row by ASC = Ascending or DESC = Descending
ORDER BY id ASC

-- limits the amount of rows
LIMIT 2;

-- @block
-- creating index's and point it to a tables colum
CREATE INDEX email_index ON Users(email);