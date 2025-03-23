import { useState } from 'react'

export default function Description() {
  return (
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
        Weather Now
      </h1>
      <p className="lead">
        <strong>
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world’s most popular front-end open source toolkit,
          featuring Sass variables and mixins, responsive grid system, extensive
          prebuilt components, and powerful JavaScript plugins.
        </strong>
      </p>
      <div class="input-group mb-3 justify-content-md-start">
        <input
          type="text"
          class="form-control"
          aria-label="Search input"
          placeholder="Enter Location"
          autoFocus="on"
        />
      </div>
    </div>
  );
}
