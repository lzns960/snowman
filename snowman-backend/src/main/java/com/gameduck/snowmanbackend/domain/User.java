package com.gameduck.snowmanbackend.domain;

import static javax.persistence.CascadeType.*;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class User {

	@Id
	@GeneratedValue
	@Column(name = "user_id")
	private Long id;

	private String email;

	private String nickname;

	@OneToMany(mappedBy = "user", cascade = ALL)
	private List<Snowman> snowmanList = new ArrayList<>();
}
