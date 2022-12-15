package com.gameduck.snowmanbackend.domain.dto;

import com.gameduck.snowmanbackend.domain.Snowman;
import com.gameduck.snowmanbackend.domain.User;

import lombok.Data;

@Data
public class SnowmanCreateRequestDto {

	private User user;
	private Long userId;

	private String hat;
	private String face;
	private String clothes;
	private String glove;

	public Snowman toEntity() {
		return Snowman.builder()
			.user(this.user)
			.hat(this.hat)
			.face(this.face)
			.clothes(this.clothes)
			.glove(this.glove)
			.build();
	}

	public void setUser(User user) {
		this.user = user;
	}
}
