import React from 'react';

const Overview = ({ cancellationPolicy, overview, entirePlace }) => {
  let summary = '';
  if (overview.length !== 0) {
    summary = 'the';
  }

  return (
    <div>
      <main className="place">{summary}</main>
      <summary className="accomodations"></summary>
    </div>
  );
};

export default Overview;
