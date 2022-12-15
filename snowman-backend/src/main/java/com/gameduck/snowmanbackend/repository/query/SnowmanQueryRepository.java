package com.gameduck.snowmanbackend.repository.query;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.gameduck.snowmanbackend.domain.Snowman;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class SnowmanQueryRepository {

	private final EntityManager em;

	@Transactional
	public List<Snowman> findAllWithUserSnowmanPosts(int offset, int limit, Long userId) {
		return em.createQuery(
				"select sm from Snowman sm" +
					" join fetch sm.user u" +
					" join fetch sm.post p"
					+ " where sm.user.user_id = : userId", Snowman.class)
			.setParameter("userId", userId)
			.setFirstResult(offset)
			.setMaxResults(limit)
			.getResultList();
	}

	@Transactional
	public List<Snowman> findUserLastSnowman(Long userId) {
		return em.createQuery(
				"select sm.snowman_id, sm.hat, sm.clothes, sm.glove from User u" +
					" where u.user_email = : userId" +
					" order by sm.snowman_id desc limit 1", Snowman.class)
			.setParameter("userId", userId)
			.getResultList();

	}

}
