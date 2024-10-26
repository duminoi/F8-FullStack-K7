create table if not exists "subject"(
                                        id bigserial not null,
                                        name text,
                                        created_at  timestamp with time zone NOT NULL DEFAULT now(),
    created_by  bigint,
    modified_at timestamp with time zone,
    modified_by bigint,
    deleted_at  timestamp with time zone,
                              deleted_by  bigint,
                              active      boolean                           DEFAULT TRUE,
                              constraint pk_subject primary key(id)
    );
create table if not exists "student"
(
    id          bigserial                not null,
    name        text,
    created_at  timestamp with time zone NOT NULL DEFAULT now(),
    created_by  bigint,
    modified_at timestamp with time zone,
    modified_by bigint,
    deleted_at  timestamp with time zone,
                              deleted_by  bigint,
                              active      boolean                           DEFAULT TRUE,
                              constraint pk_student primary key (id)
    );

create table if not exists "exam"
(
    id          bigserial                not null,
    name        text,
    subject_id  bigint,
    created_at  timestamp with time zone NOT NULL DEFAULT now(),
    created_by  bigint,
    modified_at timestamp with time zone,
    modified_by bigint,
    deleted_at  timestamp with time zone,
                              deleted_by  bigint,
                              active      boolean                           DEFAULT TRUE,
                              constraint pk_exam primary key (id),
    constraint fk_exam_subject foreign key (subject_id) references subject(id)
    );

drop table if exists exam;

create table if not exists "question"
(
    id             bigserial                not null,
    exam_id        bigint,
    question       text,
    correct_answer text,
    created_at     timestamp with time zone NOT NULL DEFAULT now(),
    created_by     bigint,
    modified_at    timestamp with time zone,
    modified_by    bigint,
    deleted_at     timestamp with time zone,
                                 deleted_by     bigint,
                                 active         boolean                           DEFAULT TRUE,
                                 constraint pk_question primary key (id) ,
    constraint fk_question_exam foreign key (exam_id) references exam(id)

    );

drop table if exists question;

create table if not exists "exam_result"
(
    id          bigserial                not null,
    student_id  bigint,
    question_id bigint,
    is_correct  boolean,
    created_at  timestamp with time zone NOT NULL DEFAULT now(),
    created_by  bigint,
    modified_at timestamp with time zone,
    modified_by bigint,
    deleted_at  timestamp with time zone,
                              deleted_by  bigint,
                              active      boolean                           DEFAULT TRUE,
                              constraint pk_exam_result primary key (id),
    constraint fk_exam_result_student foreign key (student_id) references student,
    constraint fk_exam_result_question foreign key (question_id) references question
    );


INSERT INTO "subject" (name, created_at, created_by, active)
VALUES
    ('Mathematics', now(), 1, TRUE),
    ('Physics', now(), 1, TRUE),
    ('Chemistry', now(), 1, TRUE),
    ('Biology', now(), 1, TRUE),
    ('Computer Science', now(), 1, TRUE);


INSERT INTO "student" (name, created_at, created_by, active)
VALUES
    ('Alice', now(), 1, TRUE),
    ('Bob', now(), 1, TRUE),
    ('Charlie', now(), 1, TRUE),
    ('David', now(), 1, TRUE),
    ('Eve', now(), 1, TRUE);

INSERT INTO "exam" (name, subject_id, created_at, created_by, active)
VALUES
    ('Math 1', 1, now(), 1, TRUE),
    ('Math 2', 1, now(), 1, TRUE),
    ('Math 3', 1, now(), 1, TRUE),
    ('Math Midterm', 1, now(), 1, TRUE),
    ('Physics Final', 2, now(), 1, TRUE),
    ('Physics 1', 2, now(), 1, TRUE),
    ('Physics 2', 2, now(), 1, TRUE),
    ('Physics 3', 2, now(), 1, TRUE),
    ('Chemistry 1', 3, now(), 1, TRUE),
    ('Chemistry 2', 3, now(), 1, TRUE),
    ('Chemistry 3', 3, now(), 1, TRUE),
    ('Chemistry Quiz', 3, now(), 1, TRUE),
    ('Biology Lab Test', 4, now(), 1, TRUE),
    ('Computer Science Practical', 5, now(), 1, TRUE);


INSERT INTO "question" (exam_id, question, correct_answer, created_at, created_by, active)
VALUES
    (1, 'What is 5+3?', '8', now(), 1, TRUE),
    (1, 'What is the square root of 16?', '4', now(), 1, TRUE),
    (1, 'What is 7-2?', '5', now(), 1, TRUE),
    (1, 'What is 3*3?', '9', now(), 1, TRUE),
    (2, 'What is the speed of light?', '299,792,458 m/s', now(), 1, TRUE),
    (2, 'Who is known as the father of modern physics?', 'Albert Einstein', now(), 1, TRUE),
    (2, 'What is the formula for force?', 'F = ma', now(), 1, TRUE),
    (2, 'What is the gravitational constant?', '6.674×10^-11 N(m/kg)^2', now(), 1, TRUE),
    (3, 'What is the atomic number of Hydrogen?', '1', now(), 1, TRUE),
    (3, 'What is the pH of a neutral solution?', '7', now(), 1, TRUE),
    (3, 'What is the main component of vinegar?', 'Acetic acid', now(), 1, TRUE),
    (3, 'What is the molecular weight of CO2?', '44.01 g/mol', now(), 1, TRUE),
    (4, 'What is the smallest unit of life?', 'Cell', now(), 1, TRUE),
    (4, 'What is the process of photosynthesis?', 'Conversion of light energy into chemical energy', now(), 1, TRUE),
    (4, 'What is the basic building block of proteins?', 'Amino acids', now(), 1, TRUE),
    (4, 'What is the function of red blood cells?', 'Transport oxygen', now(), 1, TRUE),
    (5, 'What does CPU stand for?', 'Central Processing Unit', now(), 1, TRUE),
    (5, 'What is the output of 1 + 1 in binary?', '10', now(), 1, TRUE),
    (5, 'What is an algorithm?', 'A step-by-step procedure for solving a problem', now(), 1, TRUE),
    (5, 'What is the time complexity of binary search?', 'O(log n)', now(), 1, TRUE);

delete from question;


INSERT INTO "exam_result" (student_id, question_id, is_correct, created_at, created_by, active,exam_id)
VALUES
    (1, 1, TRUE, now(), 1, TRUE,3),
    (2, 2, FALSE, now(), 1, TRUE,2),
    (3, 3, TRUE, now(), 1, TRUE,4),
    (4, 4, TRUE, now(), 1, TRUE,1),
    (5, 5, FALSE, now(), 1, TRUE,5);

delete from exam_result;
alter table exam_result add column exam_id bigint;
alter table exam_result add constraint fk_exam_result_exam foreign key (exam_id) references  exam(id);



-- Lấy ra ds các bài thi where theo subject_id
select e.name,e.subject_id
from exam e
         join subject s on e.subject_id = s.id
where e.subject_id > 1;


-- Lấy ra ds các bài thi (trong bài thi có ds các câu hỏi), where theo subject_id
select exam.id, exam.name as Exam_name, json_agg(json_build_object('question',question.question))
from exam
         join question on question.exam_id = exam.id
         join subject on subject.id = exam.subject_id
where exam.subject_id = 3
group by  exam.id, exam.name;

-- Lấy ra kết quả làm bài của 1 môn học. (id hs, tên hs, ds bài thi(ds câu hỏi)) where theo subject_id
select student.id,student.name as Student_name,exam.id as Exam_id,exam.name as Exam_name,json_agg((json_build_object('question',question.question))) as question
from student
         join exam_result on student.id = exam_result.student_id
         join  exam on exam.id = exam_result.exam_id
         join question on question.exam_id = exam.id
where exam.subject_id = 1
group by student.id, student.name, exam.id,exam.name;





