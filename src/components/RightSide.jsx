import styled from "styled-components";
import { Link } from "react-router-dom";

const Rightside = () => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/assets/feed-icon.svg" alt="" />
        </Title>

        <FeedList>
          <li>
            <Link to="/">
              <Avatar />
            </Link>

            <div>
              <span>#Linkedin</span>
              <button>Follow</button>
            </div>
          </li>

          <li>
            <Link to="/">
              <Avatar />
            </Link>

            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>

        <Recommendation>
          View all recommendations
          <img src="/assets/right-icon.svg" alt="" />
        </Recommendation>
      </FollowCard>

      <BannerCard>
        <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt=""
        />
      </BannerCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: rightside;

  @media screen and (max-width: 768px) {
    order: 2;
  }
`;

const FollowCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  margin-bottom: 8px;
  overflow: hidden;
  padding: 12px;
  position: relative;
  text-align: center;
`;

const Title = styled.div`
  align-items: center;
  color: rgba(0, 0, 0, 0.6);
  display: inline-flex;
  font-size: 16px;
  justify-content: space-between;
  width: 100%;
`;

const FeedList = styled.ul`
  margin-top: 16px;

  li {
    align-items: center;
    display: flex;
    font-size: 14px;
    margin: 12px 0;
    position: relative;

    & > div {
      display: flex;
      flex-direction: column;
    }

    button {
      align-items: center;
      background-color: transparent;
      border-radius: 15px;
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      box-sizing: border-box;
      color: rgba(0, 0, 0, 0.6);
      display: inline-flex;
      font-weight: 600;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      outline: none;
      padding: 16px;
      text-align: center;
    }
  }
`;

const Avatar = styled.div`
  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 48px;
  margin-right: 8px;
  width: 48px;
`;

const Recommendation = styled.a`
  align-items: center;
  color: #0a66c2;
  display: flex;
  font-size: 14px;
`;

const BannerCard = styled(FollowCard)`
  img {
    height: 100%;
    width: 100%;
  }
`;

export default Rightside;
