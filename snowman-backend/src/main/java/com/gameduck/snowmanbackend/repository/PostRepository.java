package com.gameduck.snowmanbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gameduck.snowmanbackend.domain.Post;

public interface PostRepository extends JpaRepository<Post, Long> {

	List<Post> findAllBySnowmanId(Long snowmanId);
}
