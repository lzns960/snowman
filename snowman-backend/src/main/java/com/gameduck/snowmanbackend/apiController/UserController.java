package com.gameduck.snowmanbackend.apiController;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gameduck.snowmanbackend.config.dto.UserResponseDto;
import com.gameduck.snowmanbackend.config.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class UserController {

	private final UserService userService;

	@GetMapping("/users/me")
	public ResponseEntity<UserResponseDto> getMyUserInfo() {
		UserResponseDto myInfoBySecurity = userService.getMyInfoBySecurity();
		return ResponseEntity.ok((myInfoBySecurity));
	}
}
