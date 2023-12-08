package com.idigitalstudios.pruebatecnica.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {
    String token; 
    
    public String getToken() {
        return token;
    }

    // Setter methods
    public void setToken(String token) {
        this.token = token;
    }

}

