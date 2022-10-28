
export interface SignInProps {
    username: string;
    password: string;
}

export class ApiConfig {
    endPointGateWay = '/';
    testApi = '/test';
    signinApi = '/login';
    signinTestApi = 'http://ec2-13-232-148-204.ap-south-1.compute.amazonaws.com:8082/storeflexservice/logintest';
    signUpUrl = '///'
}