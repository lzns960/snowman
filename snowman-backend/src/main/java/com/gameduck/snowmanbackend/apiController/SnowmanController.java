package com.gameduck.snowmanbackend.apiController;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gameduck.snowmanbackend.domain.Snowman;
import com.gameduck.snowmanbackend.dto.ApiResponse;
import com.gameduck.snowmanbackend.dto.SnowmanAllUserResponseDto;
import com.gameduck.snowmanbackend.dto.SnowmanSaveRequestDto;
import com.gameduck.snowmanbackend.service.SnowmanService;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class SnowmanController {

	private final SnowmanService snowmanService;

	@PostMapping("/snowmans")
	public ResponseEntity<?> saveSnowman(@RequestBody SnowmanSaveRequestDto requestDto) {
		/**
		System.out.println(requestDto.getPost());
		System.out.println(requestDto.getHeadType());
		System.out.println(requestDto.getBodyType());
		System.out.println(requestDto.getTargetEmail());
		System.out.println(requestDto.getAuthorNickname()); **/

		Snowman snowman = snowmanService.saveSnowman(requestDto);

		return ResponseEntity.ok(new ApiResponse(true, "Snowman Created Successfully!"));
	}

	@GetMapping("/snowmans/{email}")
	public Result allUserSnowmans(@PathVariable("email") String email) {
		List<SnowmanAllUserResponseDto> userAllSnowmans = snowmanService.findUserAllSnowmans(email);
		return new Result(userAllSnowmans);
	}

	@Data
	@AllArgsConstructor
	static class Result<T> {
		private T data;
	}
}
