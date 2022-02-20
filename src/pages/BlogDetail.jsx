import React from "react";
import { useParams } from "react-router-dom";
import { TitleHead } from "../components";
import { getPostById } from "../data";
import { IkoCol, IkoContainer, IkoRow, IkoTitle } from "../ikoComponents";

const BlogDetail = (props) => {
  const { id } = useParams();

  const { title, img, content, postCats, author } = getPostById(id);

  return (
    <div className="blog-detail">
      <TitleHead title={title} />
      <IkoContainer>
        <IkoRow>
          <IkoCol>
            <div className="blog-detail__img">
              <img src={img} alt="" />
            </div>
            <IkoTitle center size={36}>
              {title}
            </IkoTitle>
            <div className="blog-detail__info">
              <div className="blog-detail__cats">
                {postCats.map((item, index) => (
                  <div className="blog-detail__cats__item" key={index}>
                    {item}
                  </div>
                ))}
              </div>
              <div className="blog-detail__author">{author}</div>
            </div>
          </IkoCol>
        </IkoRow>
        <IkoRow>
          <IkoCol>
            <div
              className="blog-detail__content"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </div>
  );
};

export default BlogDetail;
