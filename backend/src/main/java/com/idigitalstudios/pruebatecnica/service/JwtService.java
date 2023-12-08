package com.idigitalstudios.pruebatecnica.service;

import org.springframework.security.core.userdetails.UserDetails;

public interface JwtService {
	String getToken(UserDetails usuario);

	String getUsernameFromToken(String token);

	boolean isTokenValid(String token, UserDetails userDetails);
	
}
