# token based auth
- https://www.pluralsight.com/guides/token-based-authentication-with-ruby-on-rails-5-api


## What Is Token-based Authentication?
- Token-based authentication (also known as JSON Web Token authentication)  [Json Web Authentication]
- is a new way of handling the authentication of users in applications.  (A new way)
- It is an alternative to session-based authentication. (Alternativ to session-based)

## The most notable difference
+ session-based 
  - authentication relies heavily on the server.  (重度依赖服务端)
  - A record is created for each logged-in user. (为每个用户存状态)
+ Token-based
  - stateless 无状态的
  - it does not store anything on the server  不用存任何的信息在服务端
  - creates a unique encoded token that gets checked every time a request is made. 存一条加密的记录
  - a token approach would not associate `a user with login information` but with `a unique token` that is used to carry client-host transactions 

## Benefits of Token-based Authentication 优点
+ Cross-domain / CORS [方便CROS]
  - Cookies and CORS don't mix well across different domains
+ Stateless [无状态]
  - There is no need to keep a session store since the token is a self-contained entity that stores all the user information in it.
+ Decoupling [分隔]
+ Mobile Ready [移动优先]
+ CSRF (Cross Site Request Forgery) [天然没有这个问题了]
  - Because the application does not rely on cookies for authentication, it is invulnerable to cross-site request attacks.
+ Performance [性能好]

## How Does Token-based Authentication Work? 怎么工作的

## What Does a JWT Token Contain?
> The token is separated into three base-64 encoded, dot-separated values. Each value represents a different type of data:

+ Header
Consists of the type of the token (JWT) and the type of encryption algorithm (HS256) encoded in base-64.

+ Payload
The payload contains information about the user and his or her role. For example, the payload of the token can contain the e-mail and the password.

+ Signature
Signature is a unique key that identifies the service which creates the header. In this case, the signature of the token will be a base-64 encoded version of the Rails application's secret key (`Rails.application.secrets.secret_key_base`). Because each application has a unique base key, this secret key serves as the token signature.


## jwt
- https://jwt.io/