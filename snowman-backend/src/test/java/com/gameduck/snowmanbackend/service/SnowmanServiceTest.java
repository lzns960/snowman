package com.gameduck.snowmanbackend.service;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import javax.persistence.EntityManager;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import com.gameduck.snowmanbackend.domain.Role;
import com.gameduck.snowmanbackend.domain.User;
import com.gameduck.snowmanbackend.dto.SnowmanAllUserResponseDto;
import com.gameduck.snowmanbackend.dto.SnowmanSaveRequestDto;
import com.gameduck.snowmanbackend.repository.SnowmanRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
class SnowmanServiceTest {

	@Autowired
	EntityManager em;

	@Autowired
	SnowmanService snowmanService;

	@Autowired
	SnowmanRepository snowmanRepository;

	@Test
	public void 눈사람생성() throws Exception {

		//given
		User user = createUser();

		String authorNickname = "익명의작성자";
		String post = "편지내용";
		String snowmanType = "SantaSanta";

		SnowmanSaveRequestDto snowmanSaveRequestDto = new SnowmanSaveRequestDto();

		snowmanSaveRequestDto.setUser(user);
		snowmanSaveRequestDto.setSnowmanId(1L);
		snowmanSaveRequestDto.setAuthorNickname(authorNickname);
		snowmanSaveRequestDto.setSnowmanType(snowmanType);
		snowmanSaveRequestDto.setPost(post);

		//when
		snowmanService.saveSnowman(snowmanSaveRequestDto);

		List<SnowmanAllUserResponseDto> userAllSnowmans = snowmanService.findUserAllSnowmans(user.getEmail());
		SnowmanAllUserResponseDto snowmanAllUserResponseDto = userAllSnowmans.get(0);

		//then
		assertEquals(1L, snowmanAllUserResponseDto.getUserId(), "생성된 눈사람 주인 확인");
		assertEquals(1L, snowmanAllUserResponseDto.getSnowmanId(), "생성된 눈사람의 id 확인");
		assertEquals("SantaSanta", snowmanAllUserResponseDto.getSnowmanType(), "생성된 눈사람의 타입확인");
		assertEquals("익명의작성자", snowmanAllUserResponseDto.getAuthorNickname(), "생성된 눈사람의 작성자확인");
		assertEquals("편지내용", snowmanAllUserResponseDto.getPost(), "생성된 눈사람의 편지내용확인");


	}


	private User createUser() {
		User user = new User();
		user.setId(1L);
		user.setEmail("회원 아이디");
		user.setNickname("회원 닉네임");
		user.setPassword("비밀번호");
		user.setRole(Role.ROLE_USER);
		em.persist(user);

		return user;
	}
}