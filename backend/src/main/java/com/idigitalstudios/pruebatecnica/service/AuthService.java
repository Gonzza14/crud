package com.idigitalstudios.pruebatecnica.service;

import com.idigitalstudios.pruebatecnica.request.LoginRequest;
import com.idigitalstudios.pruebatecnica.request.RegisterRequest;
import com.idigitalstudios.pruebatecnica.response.AuthResponse;

public interface AuthService {
	 AuthResponse login(LoginRequest request);
	 AuthResponse register(RegisterRequest request);
}
