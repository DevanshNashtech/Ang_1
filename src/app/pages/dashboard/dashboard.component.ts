import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createLearningProgressChart();
    this.createSubjectsMasteryChart();
    this.createWeeklyStudyHoursChart();
    this.createQuizScoresChart();
    this.createTimeSpentPerSubjectChart();
    this.createPerformanceComparisonChart();
  }

  closeHamburgerMenu(): void {
    const navbar = document.getElementById('navbarNavAltMarkup');
    if (navbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }

  createLearningProgressChart(): void {
    const ctx = document.getElementById('learningProgressChart') as HTMLCanvasElement;
    const learningProgressChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Learning Progress',
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createSubjectsMasteryChart(): void {
    const ctx = document.getElementById('subjectsMasteryChart') as HTMLCanvasElement;
    const subjectsMasteryChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Angular', 'React', 'Vue', 'Java', 'Node'],
        datasets: [{
          label: 'Skills Mastery',
          data: [80, 75, 90, 85, 70],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createWeeklyStudyHoursChart(): void {
    const ctx = document.getElementById('weeklyStudyHoursChart') as HTMLCanvasElement;
    const weeklyStudyHoursChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
          label: 'Weekly Study Hours',
          data: [12, 15, 10, 18],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createQuizScoresChart(): void {
    const ctx = document.getElementById('quizScoresChart') as HTMLCanvasElement;
    const quizScoresChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Angular', 'React', 'Vue', 'Java', 'Node'],
        datasets: [{
          label: 'Quiz Scores',
          data: [80, 75, 85, 90, 70],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          r: {
            min: 0,
            max: 100,
            ticks: {
              stepSize: 10
            }
          }
        }
      }
    });
  }

  createTimeSpentPerSubjectChart(): void {
    const ctx = document.getElementById('timeSpentPerSubjectChart') as HTMLCanvasElement;
    const timeSpentPerSubjectChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Angular', 'React', 'Vue', 'Java', 'Node'],
        datasets: [{
          label: 'Time Spent Per Subject',
          data: [20, 15, 25, 10, 30],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: (tooltipItem: any) => {
                if (tooltipItem.raw) {
                  return `${tooltipItem.label}: ${tooltipItem.raw.toFixed(2)}%`;
                }
                return '';
              }
            }
          }
        }
      }
    });
  }

  createPerformanceComparisonChart(): void {
    const ctx = document.getElementById('performanceComparisonChart') as HTMLCanvasElement;
    const performanceComparisonChart = new Chart(ctx, {
      type: 'bar', 
      data: {
        labels: ['Test-1', 'Test-2'],
        datasets: [{
          label: 'Performance Comparison',
          data: [85, 92],
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  }
}
