package com.indeed.indeedclone.service;

import com.indeed.indeedclone.dao.PostDao;
import com.indeed.indeedclone.dto.PostDTO;
import com.indeed.indeedclone.model.PostModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceImpl implements PostService{

    @Autowired
    PostDao postDao;

    @Override
    public PostModel savePost(PostDTO postDTO) {
        PostModel postModel = new PostModel();

        postModel.setType(postDTO.getType());
        postModel.setDescription(postDTO.getDescription());
        postModel.setSalary(postDTO.getSalary());
        postModel.setProfile(postDTO.getProfile());
        postModel.setExperience(postDTO.getExperience());
        postModel.setTechnology(postDTO.getTechnology());

       return postDao.save(postModel);
    }

    @Override
    public List<PostModel> getAllPosts() {
        return postDao.findAll();
    }
}
