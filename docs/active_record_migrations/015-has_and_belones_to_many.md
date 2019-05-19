# HABTM


## 举例 

### User/OfficialAcccount(A动词B:follow)
1. 一个用户可以关注多个公众号
2. 一个公众号也可以多个关注者

user_<follow>_official_accounts
 
| api                 | type    | description         |
| ------------------- | ------- | ------------------- |
| id                  | integer | ID                  |
| user_id             | integer | User ID             |
| official_account_id | integer | Official account ID |

### Student/Course(A动词B:learn)
1. 一个学生可以学习多门课程
2. 一个课程也可以被多个学生学习

student_<learn>_courses
 
| api        | type    | description |
| ---------- | ------- | ----------- |
| id         | integer | ID          |
| student_id | integer | Student ID  |
| course_id  | integer | Course ID   |



### Weibo/User(A动词B:at)
1. 一条微信可以 @ 多个用户
2. 一个用户可被多条微博 @

user_<at>weibo
 
| api      | type    | description |
| -------- | ------- | ----------- |
| id       | integer | ID          |
| weibo_id | integer | Weibo ID    |
| user_id  | integer | User ID     |



 