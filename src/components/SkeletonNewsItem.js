import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonNewsItem = () => {
  return (
    <div className="card mb-3">
      <div className="row">
        <div className="col-md-4">
          <Skeleton height="100%" style={{ minHeight: 180, padding: 5 }} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              <Skeleton height={40} />
            </h5>

            <p className="card-text">
              <Skeleton count={3} />
            </p>
            <p className="card-text">
              <small className="text-muted">
                <Skeleton width={250} />
              </small>
            </p>

            <Skeleton width={100} height={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonNewsItem;
