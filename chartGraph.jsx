import React from 'react';
import './PieChart.css';

const PieChart = () => {
  const GrowthGraphData = {
    attendance: {
      attendance: 35,
      attendance_placement_criteria: 75,
    },
    assignment: {
      assignment: 90,
      assignment_placement_criteria: 80,
    },
    session_test: {
      session_test: 45,
      session_test_placement_criteria: 80,
    },
    tgp: {
      tgp: 'C5',
      tgp_placement_criteria: 'C8',
    },
    mindmap: {
      mindmap: 68,
      mindmap_placement_criteria: 80,
    },
    leetcode_easy_problem: {
      leetcode_easy_problem: 55,
      leetcode_easy_problem_placement_criteria: 80,
    },
    leetcode_medium_problem: {
      leetcode_medium_problem: 45,
      leetcode_medium_problem_placement_criteria: 100,
    },
    leetcode_hard_problem: {
      leetcode_hard_problem: 13,
      leetcode_hard_problem_placement_criteria: 50,
    },
  };
  const maxScaleValue = 100;

  const calculateScale = (value) => {
    return value / maxScaleValue;
  };

  const calculateScaleOfTgp = (value) => {
    const scaleValues = {
      C0: 0,
      C1: 0.06,
      C2: 0.12,
      C3: 0.199,
      C4: 0.3,
      C5: 0.38,
      C6: 0.46,
      C7: 0.54,
      C8: 0.63,
      C9: 0.7,
      C10: 0.77,
      C11: 0.85,
      C12: 0.93,
      C13: 1,
    };

    return scaleValues[value] || 0;
  };

  return (
    <>
      <div className='detailsBox'>
        <div className='currentAchievement'>
          <div className='currentAchievementColorBox'> </div>
          <h4>Current Achievements</h4>
        </div>
        <div className='placementMileStone'>
          <div className='placementMileStoneColorBox'> </div>
          <h4>Placement Milestones</h4>
        </div>
      </div>
      <ul className='menu'>
        <li className='shape-container'>
          <svg
            width='1000px'
            height='1000px'
            viewBox='0 0 1000 1000'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M 500,200
         m -160,0
         a 160,160 0 1,0 320,0
         a 160,160 0 1,0 -320,0'
              stroke='#d9d9d9'
              strokeWidth='0'
              fill='#F2F2F2'
            />

            <defs>
              {/* Gold Gradient */}
              <linearGradient
                id='goldGradient'
                x1='0%'
                y1='0%'
                x2='100%'
                y2='0%'
              >
                <stop
                  offset='0%'
                  stopColor='#ffeb3b'
                />
                <stop
                  offset='100%'
                  stopColor='#ffc107'
                />
              </linearGradient>

              {/* Custom Gradient */}
              <linearGradient
                id='customGradient'
                x1='0%'
                y1='0%'
                x2='100%'
                y2='0%'
              >
                <stop
                  offset='0%'
                  stopColor='#1976d2'
                />
                <stop
                  offset='100%'
                  stopColor='#0f3c6d'
                />
              </linearGradient>
            </defs>
            <g>
              {/* <!-- first Slice --> */}
              <path
                fill='none'
                className='white-slice-1'
                stroke='white'
                strokeWidth='1'
                d='M 500 200 l 160 0 A 280 190 0 0 0 596 72 z'
              >
                {' '}
              </path>
              <path
                className='golden-slice-1'
                fill='url(#goldGradient)'
                d='M 500 200 l 160 0 A 280 190 0 0 0 596 72 z'
                style={{
                  transform: `scale(${calculateScale(
                    GrowthGraphData.assignment?.assignment_placement_criteria
                  )})`,
                  transformOrigin: '500px 200px',
                }}
              >
                {' '}
              </path>
              <path
                className='blue-slice-1'
                fill='url(#customGradient)'
                d='M 500 200 l 160 0 A 280 190 0 0 0 596 72 z'
                style={{
                  transform: `${
                    GrowthGraphData.assignment?.assignment > 100
                      ? 'scale(1)'
                      : `scale(${calculateScale(
                          GrowthGraphData.assignment?.assignment
                        )})`
                  }`,
                  transformOrigin: '500px 200px',
                }}
              >
                {' '}
              </path>
              <path
                className='line-slice-1'
                fill='none'
                stroke='#bfbfbf'
                strokeWidth='1'
                d='M 586 153 L 655 101 L 705 99'
              />
              <text
                x='719'
                y='90'
                className='attendance'
                fill='#1976d2'
                fontSize='1em'
              >
                Assignment
                <tspan dx='4'>-</tspan>
                <tspan dx='4'>
                  {GrowthGraphData.assignment?.assignment > 100
                    ? 100
                    : GrowthGraphData.assignment?.assignment}
                  %
                </tspan>
              </text>
              <text
                x='719'
                y='113'
                className='attendance'
                fill='gray'
                fontSize='1em'
              >
                Placement Criteria
                <tspan dx='4'>-</tspan>
                <tspan dx='4'>
                  {GrowthGraphData.assignment?.assignment_placement_criteria}%
                </tspan>
              </text>
              {/* <!-- 2nd Slice --> */}
              <path
                fill='none'
                stroke='white'
                strokeWidth='1'
                className='white-slice-1'
                d='M 500 200 l 96 -128 A 170 190 0 0 0 421 61 z'
              >
                {' '}
              </path>
              <path
                className='golden-slice-1'
                fill='url(#goldGradient)'
                stroke='white'
                strokeWidth='0'
                d='M 500 200 l 96 -128 A 170 190 0 0 0 421 61 z'
                style={{
                  transform: `scale(${calculateScale(
                    GrowthGraphData.attendance?.attendance_placement_criteria
                  )})`,
                  transformOrigin: '500px 200px',
                }}
              >
                {' '}
              </path>
              <path
                className='blue-slice-1'
                fill='url(#customGradient)'
                d='M 500 200 l 96 -128 A 170 190 0 0 0 421 61 z'
                style={{
                  transform: `${
                    GrowthGraphData.attendance?.attendance > 100
                      ? 'scale(1)'
                      : `scale(${calculateScale(
                          GrowthGraphData.attendance?.attendance
                        )})`
                  }`,
                  transformOrigin: '500px 200px',
                }}
              >
                {' '}
              </path>
              <path
                className='line-slice-1'
                fill='none'
                stroke='#bfbfbf'
                strokeWidth='1'
                d='M 503 119 L 502 19 L 559 20'
              />
              <text
                x='569'
                y='20'
                className='attendance'
                fill='#1976d2'
                fontSize='1em'
              >
                Attendance
                <tspan dx='4'>-</tspan>
                <tspan dx='4'>
                  {GrowthGraphData.attendance?.attendance > 100
                    ? 100
                    : GrowthGraphData.attendance?.attendance}
                  %
                </tspan>
              </text>
              <text
                x='569'
                y='40'
                className='attendance'
                fill='gray'
                fontSize='1em'
              >
                Placement Criteria
                <tspan dx='4'>-</tspan>
                <tspan dx='4'>
                  {GrowthGraphData.attendance?.attendance_placement_criteria}%
                </tspan>
              </text>
              {/* <!-- 3nd Slice --> */}
              <path
                fill='none'
                stroke='white'
                strokeWidth='1'
                className='white-slice-1'
                d='M 500 200 l -82 -139 A 293 200 0 0 0 340 200 z'
              >
                {' '}
              </path>
              <path
                className='golden-slice-1'
                fill='url(#goldGradient)'
                d='M 500 200 l -82 -139 A 293 200 0 0 0 340 200 z'
                style={{
                  transform: `scale(${calculateScale(
                    GrowthGraphData.mindmap?.mindmap_placement_criteria
                  )})`,
                  transformOrigin: '500px 200px',
                }}
              >
                {' '}
              </path>
              <path
                className='blue-slice-1'
                fill='url(#customGradient)'
                d='M 500 200 l -82 -139 A 293 200 0 0 0 340 200 z'
                style={{
                  transform: `${
                    GrowthGraphData.mindmap?.mindmap > 100
                      ? 'scale(1)'
                      : `scale(${calculateScale(
                          GrowthGraphData.mindmap?.mindmap
                        )})`
                  }`,
                  transformOrigin: '500px 200px',
                }}
              >
                {' '}
              </path>
              <path
                className='line-slice-1'
                fill='none'
                stroke='#bfbfbf'
                strokeWidth='1'
                d='M 479 186 L 303 100 L 214 101'
              />
              <text
                x='6'
                y='80'
                className='attendance'
                fill='#1976d2'
                fontSize='1em'
              >
                Mindmap
                <tspan dx='4'>-</tspan>
                <tspan dx='4'>
                  {GrowthGraphData.mindmap?.mindmap > 100
                    ? 100
                    : GrowthGraphData.mindmap?.mindmap}
                  %
                </tspan>
              </text>
              <text
                x='4'
                y='100'
                className='attendance'
                fill='gray'
                fontSize='1em'
              >
                Placement Criteria
                <tspan dx='4'>-</tspan>
                <tspan dx='4'>
                  {GrowthGraphData.mindmap?.mindmap_placement_criteria}%
                </tspan>
              </text>
              {/* <!-- 4Th Slice --> */}
              <path
                fill='none'
                stroke='white'
                strokeWidth='1'
                className='white-slice-1'
                d='M 500 200 l -160 0 A 293 200 0 0 0 391 317 z'
              >
                {' '}
              </path>
              <path
                className='golden-slice-1'
                fill='url(#goldGradient)'
                d='M 500 200 l -160 0 A 293 200 0 0 0 391 317 z'
                style={{
                  transform: `scale(${calculateScale(
                    GrowthGraphData?.session_test
                      ?.session_test_placement_criteria
                  )})`,
                  transformOrigin: '500px 200px',
                }}
              >
                {' '}
              </path>
              <path
                className='blue-slice-1'
                fill='url(#customGradient)'
                d='M 500 200 l -160 0 A 293 200 0 0 0 391 317 z'
                style={{
                  transform: `${
                    GrowthGraphData?.session_test?.session_test > 100
                      ? 'scale(1)'
                      : `scale(${calculateScale(
                          GrowthGraphData?.session_test?.session_test
                        )})`
                  }`,
                  transformOrigin: '500px 200px',
                }}
              >
                {' '}
              </path>
              <path
                className='line-slice-1'
                fill='none'
                stroke='#bfbfbf'
                strokeWidth='1'
                d='M 414 236 L 303 289 L 204 290'
              />
              <text
                x='29'
                y='290'
                className='attendance'
                fill='#1976d2'
                fontSize='1em'
              >
                Session Test
                <tspan dx='4'>-</tspan>
                <tspan dx='4'>
                  {GrowthGraphData?.session_test?.session_test > 100
                    ? 100
                    : GrowthGraphData?.session_test?.session_test}
                  %
                </tspan>
              </text>
              <text
                x='29'
                y='310'
                className='attendance'
                fill='gray'
                fontSize='1em'
              >
                Placement Criteria <tspan dx='4'>-</tspan>
                <tspan dx='4'>
                  {
                    GrowthGraphData?.session_test
                      ?.session_test_placement_criteria
                  }
                  %
                </tspan>
                <tspan dx='4'>( Optional )</tspan>
              </text>
              {/* <!-- 5Th Slice --> */}
              <path
                fill='none'
                stroke='white'
                strokeWidth='1'
                className='white-slice-1'
                d='M 500 200 l -109 117 A 293 200 0 0 0 433 346 z'
              >
                {' '}
              </path>
              <path
                className='golden-slice-1'
                fill='url(#goldGradient)'
                d='M 500 200 l -109 117 A 293 200 0 0 0 433 346 z'
                style={{
                  transform: `scale(${calculateScale(
                    GrowthGraphData.leetcode_easy_problem
                      ?.leetcode_easy_problem_placement_criteria
                  )})`,
                  transformOrigin: '500px 200px',
                }}
              >
                {' '}
              </path>
              <path
                className='blue-slice-1'
                fill='url(#customGradient)'
                d='M 500 200 l -109 117 A 293 200 0 0 0 433 346 z'
                // transform-origin='500 200'
                style={{
                  transform: `scale(${calculateScale(
                    GrowthGraphData.leetcode_easy_problem
                      ?.leetcode_easy_problem > 100
                      ? 100
                      : GrowthGraphData.leetcode_easy_problem
                          ?.leetcode_easy_problem
                  )})`,
                  transformOrigin: '500px 200px',
                }}
              >
                {' '}
              </path>
              <path
                className='line-slice-1'
                fill='none'
                stroke='#bfbfbf'
                strokeWidth='1'
                d='M 477 236 L 394 359 L 324 359'
              />
              <text
                x='119'
                y='352'
                className='attendance'
                fill='#1976d2'
                fontSize='1em'
              >
                Leetcode Easy Problems <tspan dx='4'>:</tspan>
                <tspan dx='4'>
                  {GrowthGraphData.leetcode_easy_problem?.leetcode_easy_problem}
                </tspan>
              </text>
              <text
                x='119'
                y='375'
                className='attendance'
                fill='gray'
                fontSize='1em'
              >
                Placement Criteria
                <tspan dx='4'>:</tspan>
                <tspan dx='4'>
                  {
                    GrowthGraphData.leetcode_easy_problem
                      ?.leetcode_easy_problem_placement_criteria
                  }
                </tspan>
              </text>
              {/* <!-- 6Th Slice --> */}
              <path
                fill='none'
                stroke='white'
                strokeWidth='1'
                className='white-slice-1'
                d='M 500 200 l -67 146 A 293 200 0 0 0 476 359 z'
              >
                {' '}
              </path>
              <path
                className='golden-slice-1'
                fill='url(#goldGradient)'
                d='M 500 200 l -67 146 A 293 200 0 0 0 476 359 z'
                style={{
                  transform: `scale(${calculateScale(
                    GrowthGraphData.leetcode_medium_problem
                      ?.leetcode_medium_problem_placement_criteria
                  )})`,
                  transformOrigin: '500px 200px',
                }}
              >
                {' '}
              </path>
              <path
                className='blue-slice-1'
                fill='url(#customGradient)'
                d='M 500 200 l -67 146 A 293 200 0 0 0 476 359 z'
                style={{
                  transform: `scale(${calculateScale(
                    GrowthGraphData.leetcode_medium_problem
                      ?.leetcode_medium_problem > 100
                      ? 100
                      : GrowthGraphData.leetcode_medium_problem
                          ?.leetcode_medium_problem
                  )})`,
                  transformOrigin: '500px 200px',
                }}
              >
                {' '}
              </path>
              <path
                className='line-slice-1'
                fill='none'
                stroke='#bfbfbf'
                strokeWidth='1'
                d='M 480 268 L 451 399 L 451 399'
              />
              <text
                x='309'
                y='412'
                className='attendance'
                fill='#1976d2'
                fontSize='1em'
              >
                Leetcode Medium Problems
                <tspan dx='4'>:</tspan>
                <tspan dx='4'>
                  {
                    GrowthGraphData.leetcode_medium_problem
                      ?.leetcode_medium_problem
                  }
                </tspan>
              </text>
              <text
                x='309'
                y='432'
                className='attendance'
                fill='gray'
                fontSize='1em'
              >
                Placement Criteria
                <tspan dx='4'>:</tspan>
                <tspan dx='4'>
                  {
                    GrowthGraphData.leetcode_medium_problem
                      ?.leetcode_medium_problem_placement_criteria
                  }
                </tspan>
              </text>
              {/* <!-- 7Th Slice --> */}
              <path
                fill='none'
                stroke='white'
                strokeWidth='1'
                className='white-slice-1'
                d='M 500 200 l -24 159 A 203 200 0 0 0 549 353 z'
              >
                {' '}
              </path>
              <path
                className='golden-slice-1'
                fill='url(#goldGradient)'
                d='M 500 200 l -24 159 A 203 200 0 0 0 549 353 z'
                style={{
                  transform: `scale(${calculateScale(
                    GrowthGraphData.leetcode_hard_problem
                      ?.leetcode_hard_problem_placement_criteria
                  )})`,
                  transformOrigin: '500px 200px',
                }}
              >
                {' '}
              </path>
              <path
                className='blue-slice-1'
                fill='url(#customGradient)'
                d='M 500 200 l -24 159 A 203 200 0 0 0 549 353 z'
                style={{
                  transform: `${
                    GrowthGraphData.leetcode_hard_problem
                      ?.leetcode_hard_problem > 100
                      ? 'scale(1)'
                      : `scale(${calculateScale(
                          GrowthGraphData.leetcode_hard_problem
                            ?.leetcode_hard_problem
                        )})`
                  }`,
                  transformOrigin: '500px 200px',
                }}
              >
                {' '}
              </path>
              <path
                className='line-slice-1'
                fill='none'
                stroke='#bfbfbf'
                strokeWidth='1'
                d='M 502 223 L 524 365 L 651 385'
              />
              <text
                x='669'
                y='380'
                className='attendance'
                fill='#1976d2'
                fontSize='1em'
              >
                Leetcode Hard Problems
                <tspan dx='4'>:</tspan>
                <tspan dx='4'>
                  {GrowthGraphData.leetcode_hard_problem?.leetcode_hard_problem}
                </tspan>
              </text>
              <text
                x='669'
                y='402'
                className='attendance'
                fill='gray'
                fontSize='1em'
              >
                Placement Criteria
                <tspan dx='4'>:</tspan>
                <tspan dx='4'>
                  {
                    GrowthGraphData.leetcode_hard_problem
                      ?.leetcode_hard_problem_placement_criteria
                  }
                </tspan>
              </text>
              {/* <!-- 8Th Slice --> */}
              <path
                fill='none'
                stroke='white'
                strokeWidth='1'
                className='white-slice-1'
                d='M 500 200 l 50 153 A 233 173 0 0 0 660 200 z'
              >
                {' '}
              </path>
              <path
                className='golden-slice-1'
                fill='url(#goldGradient)'
                d='M 500 200 l 50 153 A 233 173 0 0 0 660 200 z'
                style={{
                  transform: `scale(${calculateScaleOfTgp(
                    GrowthGraphData.tgp?.tgp_placement_criteria
                  )})`,
                  transformOrigin: '500px 200px',
                }}
              >
                {' '}
              </path>
              <path
                className='blue-slice-1'
                fill='url(#customGradient)'
                d='M 500 200 l 50 153 A 233 173 0 0 0 660 200 z'
                style={{
                  transform: `scale(${calculateScaleOfTgp(
                    GrowthGraphData.tgp?.tgp
                  )})`,
                  transformOrigin: '500px 200px',
                }}
              >
                {' '}
              </path>
              <path
                fill='none'
                d='M 500 200 l 50 153 A 233 173 0 0 0 660 200 z'
                stroke='white'
                strokeWidth='2'
                style={{
                  transform: 'scale(.06)',
                  transformOrigin: '500px 200px',
                }}
              >
                {' '}
              </path>
              <path
                fill='none'
                d='M 500 200 l 50 153 A 233 173 0 0 0 660 200 z'
                stroke='#dfe5f0'
                strokeWidth='1'
                style={{
                  transform: 'scale(.12)',
                  transformOrigin: '500px 200px',
                }}
              >
                {' '}
              </path>
              <path
                fill='none'
                d='M 500 200 l 50 153 A 233 173 0 0 0 660 200 z'
                stroke='#dfe5f0'
                strokeWidth='1'
                style={{
                  transform: 'scale(.2)',
                  transformOrigin: '500px 200px',
                }}
              >
                {' '}
              </path>
              <path
                fill='none'
                d='M 500 200 l 50 153 A 233 173 0 0 0 660 200 z'
                stroke='#dfe5f0'
                strokeWidth='1'
                style={{
                  transform: 'scale(.3)',
                  transformOrigin: '500px 200px',
                }}
              >
                {' '}
              </path>
              <path
                fill='none'
                d='M 500 200 l 50 153 A 233 173 0 0 0 660 200 z'
                stroke='#dfe5f0'
                strokeWidth='1'
                style={{
                  transform: 'scale(.38)',
                  transformOrigin: '500px 200px',
                }}
              >
                {' '}
              </path>
              <path
                fill='none'
                d='M 500 200 l 50 153 A 233 173 0 0 0 660 200 z'
                stroke='#dfe5f0'
                strokeWidth='1'
                style={{
                  transform: 'scale(.46)',
                  transformOrigin: '500px 200px',
                }}
              >
                {' '}
              </path>
              <path
                fill='none'
                d='M 500 200 l 50 153 A 233 173 0 0 0 660 200 z'
                stroke='#dfe5f0'
                strokeWidth='1'
                style={{
                  transform: 'scale(.54)',
                  transformOrigin: '500px 200px',
                }}
              >
                {' '}
              </path>
              <path
                fill='none'
                d='M 500 200 l 50 153 A 233 173 0 0 0 660 200 z'
                stroke='#dfe5f0'
                strokeWidth='1'
                style={{
                  transform: 'scale(.63)',
                  transformOrigin: '500px 200px',
                }}
              >
                {' '}
              </path>
              <path
                fill='none'
                d='M 500 200 l 50 153 A 233 173 0 0 0 660 200 z'
                stroke='#dfe5f0'
                strokeWidth='1'
                style={{
                  transform: 'scale(.7)',
                  transformOrigin: '500px 200px',
                }}
              >
                {' '}
              </path>
              <path
                fill='none'
                d='M 500 200 l 50 153 A 233 173 0 0 0 660 200 z'
                stroke='#dfe5f0'
                strokeWidth='1'
                style={{
                  transform: 'scale(.77)',
                  transformOrigin: '500px 200px',
                }}
              >
                {' '}
              </path>
              <path
                fill='none'
                d='M 500 200 l 50 153 A 233 173 0 0 0 660 200 z'
                stroke='#dfe5f0'
                strokeWidth='1'
                style={{
                  transform: 'scale(.85)',
                  transformOrigin: '500px 200px',
                }}
              >
                {' '}
              </path>
              <path
                fill='none'
                d='M 500 200 l 50 153 A 233 173 0 0 0 660 200 z'
                stroke='#dfe5f0'
                strokeWidth='1'
                style={{
                  transform: 'scale(.927)',
                  transformOrigin: '500px 200px',
                }}
              >
                {' '}
              </path>
              <path
                fill='none'
                stroke='#dfe5f0'
                strokeWidth='1'
                d='M 500 200 L 660 200'
              />
              <path
                fill='none'
                stroke='#dfe5f0'
                strokeWidth='1'
                d='M 500 200 L 551 354'
              />
              <path
                className='line-slice-1'
                fill='none'
                stroke='#bfbfbf'
                strokeWidth='1'
                d='M 546 237 L 673 306 L 734 308'
              />
              <text
                x='739'
                y='300'
                className='attendance'
                fill='#1976d2'
                fontSize='1em'
              >
                TGP
                <tspan dx='4'>-</tspan>
                <tspan dx='4'>{GrowthGraphData.tgp?.tgp}</tspan>
              </text>
              <text
                x='739'
                y='320'
                className='attendance'
                fill='gray'
                fontSize='1em'
              >
                Placement Criteria
                <tspan dx='4'>-</tspan>
                <tspan dx='4'>
                  {GrowthGraphData.tgp?.tgp_placement_criteria}
                </tspan>
              </text>
            </g>
          </svg>
        </li>
      </ul>
    </>
  );
};

export default PieChart;
