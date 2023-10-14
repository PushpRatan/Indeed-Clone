package com.indeed.indeedclone.dao;

import com.indeed.indeedclone.dto.PostDTO;
import com.indeed.indeedclone.model.PostModel;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PostDao extends MongoRepository<PostModel, String> {
}
