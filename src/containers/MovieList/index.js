import React from "react";
import { MOVIE_LIST } from "../../constant/movies";
import Movie from "../../components/Movie";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as movieAction from "../../actions/movie";
import PropTypes from "prop-types";

function MovieList(props) {
  const { movieList, popularActionCreator } = props;
  React.useEffect(() => {
    const { fetchPopular } = popularActionCreator;
    fetchPopular();
  }, [popularActionCreator]);
  const renderList = () => (
    <div>
      {MOVIE_LIST.map((movie) => {
        const topicList = movieList.filter(
          (topic) => topic.status === movie.status
        );
        if (topicList.length > 0) {
          return (
            <Movie
              key={movie.title}
              title={movie.title}
              topic={topicList[0].results}
            />
          );
        }
        return null;

        // ));
        // return <Movie key={movie.title} title={movie.title} />;
      })}
    </div>
  );
  return (
    <>
      <h1>Movies</h1>
      {renderList()}
    </>
  );
}
MovieList.propTypes = {
  movieList: PropTypes.shape({
    results: PropTypes.array,
    status: PropTypes.string,
  }),
};
MovieList.defaultProps = {
  movieList: PropTypes.shape({
    results: [],
    status: "",
  }),
};

const mapStateToProps = (state) => ({
  movieList: [{ results: state.movies.popular.results, status: "1" }],
});
const mapDispatchToProps = (dispatch) => ({
  popularActionCreator: bindActionCreators(movieAction, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
