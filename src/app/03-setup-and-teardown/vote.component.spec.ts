import { VoteComponent } from './vote.component'; 

describe('VOTE COMPONENT SUITE', () => {
  let votecomponent: VoteComponent;
  beforeEach(()=>{
    // ARRANGE OR CREATE INSTANCE
    votecomponent = new VoteComponent;
  });

  it('should return one when upvoted the first time', () => {
    // ACT
    votecomponent.upVote();
    // ASSERT
    expect(votecomponent.totalVotes).toBe(1);
  });

  it('should return minus one when downvoted', () => {
    // ACT
    votecomponent.downVote();
    // ASSERT
    expect(votecomponent.totalVotes).toBe(-1);
  });
});