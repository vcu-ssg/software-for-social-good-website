-- Drops all tables. Amend as new tables are added.

drop table if exists people;
drop table if exists roles;
drop table if exists skills;
drop table if exists peopleroles;
drop table if exists peopleskills;

-- Team members

drop table if exists people;
create table people(
    people_id int auto_increment,
    eid varchar(255) not null,
    firstname varchar(255) not null,
    lastname varchar(255) not null,
    email varchar(255) not null,
    linkedin_url varchar(255),
    headshot_url varchar(255),
    brief_bio varchar(255),
    joined_ssg datetime default current_timestamp,
    primary key (people_id)
) ENGINE=InnoDB AUTO_INCREMENT=1001;

insert into people(eid, firstname, lastname, email, linkedin_url, headshot_url, brief_bio, joined_ssg) values
    ('jdleonard', 'John','Leonard', 'jdleonard@vcu.edu', 'linkedin_url', 'pic-Patrick.png', 'brief_bio'), -- 1
    ('wbenton', 'William', 'Benton', 'wbenton@vcu.edu', 'linkedin_url', 'pic-Patrick.png', 'brief_bio'), -- 2
    ('trandh4', 'Daniel', 'Tran','trandh4@vcu.edu', 'https://www.linkedin.com/in/tranhdaniel/', 'DanielPic.png', 'brief_bio'), -- 3
    ('lykt2', 'Kevin', 'Ly', 'lykt2@vcu.edu', 'linkedin_url', 'KevinPic.png', 'brief_bio'), -- 4
    ('shinsy3', 'Lizzy', 'Shin', 'shinsy3@vcu.edu', 'linkedin_url', 'lizzyPic.png', 'brief_bio'), -- 5
    ('thorntonkj', 'Kian', 'Thornton', 'thorntonkj@vcu.edu', 'linkedin_url', 'kianPic.png', 'brief_bio'), -- 6
    ('parki2', 'Inho','Park', 'parki2@vcu.edu', 'linkedin_url', 'inhoPic.png', 'brief_bio'), -- 7
    ('dasariss', 'Sneha', 'Dasari', 'dasariss@vcu.edu', 'linkedin_url', 'blank.png', 'brief_bio') -- 8
    ;

-- Note: remind developers (kevin?) to be consistent with png naming
-- add linkedin urls
-- implement new people, remove old?
-- pictures


-- Roles

drop table if exists roles;
create table roles (
  roles_id int auto_increment,
  role varchar(255) not null,
  description varchar(255) not null,
  sortorder int not null default 0,
  primary key (roles_id)
) ENGINE=InnoDB AUTO_INCREMENT=2001;

insert into roles (roles_role, roles_description, roles_sortorder) values
('Developer', 'Someone who writes code', 100),
('Designer', 'Someone who designs layouts and images', 200),
('Researcher', 'Someone who gathers information', 300),
('Team lead', 'Someone who manages a team', 400),
('Mentor', 'Someone who mentors team members', 500)
;

-- Note: Go through sort order???

-- Skills

drop table if exists skills;
create table skills(
    skills_id int auto_increment,
    skills_skill varchar(255) not null,
    skills_description varchar(4096),
    primary key (skills_id)
) ENGINE=InnoDB AUTO_INCREMENT=3001;

insert into skills (skills_skill, skills_description) values
('Management', 'Leading teams'),
('Java', 'Programming language'),
('C', 'Programming language'),
('HTML/CSS', 'Programming language'),
('JavaScript', 'Programming language'),
('SQL', 'Programming language'),
('Figma', 'Design platform')
;

-- Peopleroles
drop table if exists peopleroles;
create table peopleroles(
    peopleroles_id int auto_increment,
    people_id int not null,
    roles_id int not null,
    primary key (peopleroles_id),
    foreign key (people_id) references people(people_id),
    foreign key (roles_id) references roles(roles_id)
)

insert into peopleroles (peopleroles_people_id, peopleroles_roles_id) values
    (1001, 2005),
    (1002, 2005),
    (1003, 2001),
    (1003, 2004),
    (1004, 2001),
    (1004, 2004),
    (1005, 2002),
    (1005, 2004),
    (1006, 2002),
    (1007, 2002),
    (1007, 2004),
    (1008, 2002), -- sneha designer/researcher??
;

-- Peopleskills
drop table if exists peopleskills;
create table peopleskills(
    peopleskills_id int auto_increment,
    peopleskills_people_id int not null,
    peopleskills_roles_id int not null,
    primary key (peopleskills_id),
    foreign key (peopleskills_people_id) references people(people_id),
    foreign key (peopleskills_skills_id) references skills(skills_id)
)

insert into peopleskills (peopleroles_people_id, peopleroles_roles_id) values
    (1001, 3001),
    (1002, 3001),
    (1003, 3002),
    (1004, 3002),
    (1005, 3007),
    (1006, 3007),
    (1007, 3007),
    (1008, 3007), -- sneha designer/researcher??
;

-- Note: Very unfinished

-- Views --
-- Peopleroles
drop view if exists peopleandroles_vw;
create view peopleandroles_vw AS
SELECT
    people_id,
    people_eid as eid,
    people_firstname as firstname,
    people_lastname as lastname,
    people_email as email,
    people_image_url as image_url,
    roles_role as role
FROM
    peopleroles
        left join people on (peopleroles_people_id=people_id)
        left join roles on (peopleroles_roles_id=roles_id)
order BY
    roles_sortorder,
    people_lastname,
    people_firstname;

-- Peopleskills
drop view if exists peopleandskills_vw;
create view peopleandskills_vw AS
SELECT
    people_id,
    people_eid as eid,
    people_firstname as firstname,
    people_lastname as lastname,
    people_email as email,
    people_image_url as image_url,
    skills_skill as skill
FROM
    peopleroles
        left join people on (peopleskills_people_id=people_id)
        left join skills on (peopleskills_skills_id=skills_id)
order BY
    people_lastname,
    people_firstname;