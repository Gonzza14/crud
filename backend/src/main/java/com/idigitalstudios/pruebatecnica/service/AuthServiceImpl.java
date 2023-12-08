package com.idigitalstudios.pruebatecnica.service;

import org.springframework.stereotype.Service;

import com.idigitalstudios.pruebatecnica.model.Usuario;
import com.idigitalstudios.pruebatecnica.repository.UsuarioRepository;
import com.idigitalstudios.pruebatecnica.request.LoginRequest;
import com.idigitalstudios.pruebatecnica.request.RegisterRequest;
import com.idigitalstudios.pruebatecnica.response.AuthResponse;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;


import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

	private final UsuarioRepository usuarioRepository;
	private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
	@Override
	public AuthResponse login(LoginRequest request) {
		   authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
	        UserDetails user=usuarioRepository.findByUsername(request.getUsername()).orElseThrow();
	        String token=jwtService.getToken(user);
	        return AuthResponse.builder()
	            .token(token)
	            .build();
	}

	@Override
	public AuthResponse register(RegisterRequest request) {
		// TODO Auto-generated method stub
		Usuario usuario = Usuario.builder()
				.names(request.getNames())
				.lastnames(request.getLastnames())
				.username(request.getUsername())
				.password(passwordEncoder.encode( request.getPassword()))
				.email(request.getEmail())
				.tel(request.getTel())
				.address(request.getAddress())
				.build();
		
		usuarioRepository.save(usuario);
		
		return AuthResponse.builder()
	            .token(jwtService.getToken(usuario))
	            .build();
	}

}
