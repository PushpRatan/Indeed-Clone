package com.indeed.indeedclone.controller;

import com.indeed.indeedclone.constants.APIConstants;
import com.indeed.indeedclone.dto.PostDTO;
import com.indeed.indeedclone.model.PostModel;
import com.indeed.indeedclone.service.PostService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
@CrossOrigin
public class PostController {

    final PostService postService;

    @PostMapping(APIConstants.SAVE_Post)
    public PostModel savePost(@Valid @RequestBody PostDTO postDTORequest){
        log.info("Saving Post ######");
        return this.postService.savePost(postDTORequest);
    }

    @GetMapping(APIConstants.GET_ALL_POST)
    public List<PostModel> getAllPosts(){
        log.info("Getting all posts #######");
        return this.postService.getAllPosts();
    }
}
