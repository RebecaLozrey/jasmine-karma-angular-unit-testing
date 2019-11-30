import { VoteComponent } from './vote.component'; 


describe('VOTE COMPONENT SUITE', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should check if voteChante emmiter raises an event', () => {
    // emmiters are observables
    var votes = null;

    component.voteChanged.subscribe( totalVotes => votes = totalVotes);

    component.upVote();

    expect(votes).toBe(1);
  });
});