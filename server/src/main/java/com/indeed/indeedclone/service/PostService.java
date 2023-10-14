package com.indeed.indeedclone.service;

import com.indeed.indeedclone.model.PostModel;
import com.indeed.indeedclone.dto.PostDTO;

import java.util.List;


public interface PostService {
    public PostModel savePost(PostDTO postDTO);

    List<PostModel> getAllPosts();
}
