import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import PracticeCard from "./PracticeCard";
import ComponentLoading from "../QueryState/ComponentLoading";



const PracticeCardGrid = (props) => {

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || !props.onLoadMore) return;
    props.onLoadMore(props.page);
  }

  if (props.loading && !props.practices) return <ComponentLoading />;
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignContent="flex-start"
      alignItems="flex-start"
      spacing={2}
    >
      {props.practices.map((practice) => (
        <PracticeCard
          key={practice.id}
          practiceId={practice.id}
          practiceTitle={practice.title}
          coverImage={practice.coverImage}
          tags={practice.tags}
          slug={practice.slug}
          subtitle={practice.subtitle}
          mediaGallery={practice.mediaGallery.length}
          ama={practice.ama.length}
          upvotes={practice.upvotes}
        />
      ))}
      {props.loading && <ComponentLoading />}
    </Grid>
  );
};

export default PracticeCardGrid;
