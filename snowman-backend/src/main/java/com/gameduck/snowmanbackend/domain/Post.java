package com.gameduck.snowmanbackend.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.NaturalId;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Post {

	@Id
	@GeneratedValue
	private Long id;

	private String author;

	private String content;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "snowman_id")
	private Snowman snowman;

	@Enumerated(EnumType.STRING)
	@NaturalId
	@Column(length = 60)
	private PostType postType;

}
