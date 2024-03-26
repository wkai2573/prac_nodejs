# Extended Errors for API

## Error Codes
| class | HTTP status code | code | sample message | description |
| --- | --- | --- | --- | --- |
| - | 400 | 4000 | blablabla... | Bad request |
| BadRequestError | 400 | 4001 | Badrequest - blablabla... | Basic bad request error |
| IllegalArgument | 400 | 4002 | Bad argument: blablabla... | Basic bad argument error |
| - | 401 | 4010 | blablabla... | Unauthorized |
| AuthenticationFailed | 401 | 4011 | Please check account or password. | Authentiaction failed error |
| NoAccessToken | 401 | 4012 | No access token | No access token error |
| InvalidToken | 401 | 4012 | Token is invalid | Invalid token error |
| UnsupportedToken | 401 | 4012 | Token is unsupported | Unsupported token error |
| - | 403 | 4030 | blablabla... | Forbidden |
| ForbiddenError | 403 | 4031 | Access denied. | Forbidden error |
| - | 404 | 4040 | blablabla... | Not found |
| NotFoundError | 404 | 4041 | blablabla... not exists | Not found error |
| - | 409 | 4090 | blablabla... | Conflict |
| ExistsError | 409 | 4091 | blablabla... already exists | Exists error |
| - | 501 | 5010 | blablabla... | Not implemented |
| NotImplemented | 501 | 5011 | Not Implemented. blablabla... | Not implemented error |
| UnknownError | 500 | 9999 | Unknown error | Default error |
