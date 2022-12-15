package com.gameduck.snowmanbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gameduck.snowmanbackend.domain.Snowman;

public interface SnowmanRepository extends JpaRepository<Snowman, Long> {

	List<Snowman> findAllByUserId(Long userId);

}
