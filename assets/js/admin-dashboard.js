/* Admin dashboard charts — data inlined from the seeded mock data */
document.addEventListener('DOMContentLoaded', function () {
    Chart.defaults.color = '#94A3B8';
    Chart.defaults.font.family = "'Plus Jakarta Sans', sans-serif";

    // Line Chart
    const yearData  = ["2006", "2008", "2010", "2013", "2014", "2016", "2017", "2018", "2021"];
    const yearCount = [2, 2, 1, 1, 2, 2, 2, 1, 1];

    const ctxLine = document.getElementById('activityChart').getContext('2d');
    const gradientLine = ctxLine.createLinearGradient(0, 0, 0, 220);
    gradientLine.addColorStop(0, 'rgba(20, 184, 166, 0.45)');
    gradientLine.addColorStop(1, 'rgba(20, 184, 166, 0.02)');

    new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: yearData,
            datasets: [{
                label: 'Songs',
                data: yearCount,
                borderColor: '#14B8A6',
                backgroundColor: gradientLine,
                borderWidth: 3,
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#67E8F9',
                pointBorderColor: '#14B8A6',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#0F172A',
                    borderColor: '#1E293B',
                    borderWidth: 1,
                    titleColor: '#67E8F9',
                    bodyColor: '#E5E7EB',
                    padding: 12,
                    cornerRadius: 8,
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(30, 41, 59, 0.5)', drawBorder: false },
                    ticks: { color: '#94A3B8', font: { size: 11, weight: '600' } }
                },
                y: {
                    grid: { color: 'rgba(30, 41, 59, 0.5)', drawBorder: false },
                    ticks: { color: '#94A3B8', font: { size: 11, weight: '600' }, stepSize: 1, precision: 0 },
                    beginAtZero: true
                }
            }
        }
    });

    // Donut Chart with 4 categories
    const ctxDonut = document.getElementById('distributionChart').getContext('2d');
    new Chart(ctxDonut, {
        type: 'doughnut',
        data: {
            labels: ['Music', 'Albums', 'Videos', 'Artists'],
            datasets: [{
                data: [14, 10, 9, 10],
                backgroundColor: ['#14B8A6', '#0EA5E9', '#67E8F9', '#8B5CF6'],
                borderColor: '#0F172A',
                borderWidth: 3,
                hoverOffset: 6,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '68%',
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#0F172A',
                    borderColor: '#1E293B',
                    borderWidth: 1,
                    titleColor: '#67E8F9',
                    bodyColor: '#E5E7EB',
                    padding: 12,
                    cornerRadius: 8,
                }
            }
        }
    });
});
    // Genre Chart (Bar)
    const genreLabels = ["Pop", "Rock", "Classical", "Electronic"];
    const genreCounts = [10, 1, 2, 1];

    if (genreLabels.length > 0) {
        const ctxGenre = document.getElementById('genreChart').getContext('2d');
        new Chart(ctxGenre, {
            type: 'bar',
            data: {
                labels: genreLabels,
                datasets: [{
                    label: 'Songs',
                    data: genreCounts,
                    backgroundColor: [
                        '#14B8A6', '#0EA5E9', '#67E8F9', '#8B5CF6', '#EC4899',
                        '#F59E0B', '#10B981', '#EF4444', '#6366F1', '#F97316'
                    ],
                    borderRadius: 8,
                    borderSkipped: false,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: '#0F172A',
                        borderColor: '#1E293B',
                        borderWidth: 1,
                        titleColor: '#67E8F9',
                        bodyColor: '#E5E7EB',
                        padding: 12,
                        cornerRadius: 8,
                    }
                },
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: { color: '#94A3B8', font: { size: 11, weight: '600' } }
                    },
                    y: {
                        grid: { color: 'rgba(30, 41, 59, 0.5)', drawBorder: false },
                        ticks: { color: '#94A3B8', font: { size: 11, weight: '600' }, stepSize: 1, precision: 0 },
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Rating Chart (Doughnut)
    const ratingData = [0, 0, 0, 4, 7];
    const ctxRating = document.getElementById('ratingChart').getContext('2d');
    new Chart(ctxRating, {
        type: 'doughnut',
        data: {
            labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
            datasets: [{
                data: ratingData,
                backgroundColor: ['#EF4444', '#F97316', '#F59E0B', '#22D3EE', '#14B8A6'],
                borderColor: '#0F172A',
                borderWidth: 3,
                hoverOffset: 6,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '60%',
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: '#E5E7EB',
                        font: { size: 12, weight: '600' },
                        padding: 12,
                        boxWidth: 12,
                        boxHeight: 12,
                    }
                },
                tooltip: {
                    backgroundColor: '#0F172A',
                    borderColor: '#1E293B',
                    borderWidth: 1,
                    titleColor: '#67E8F9',
                    bodyColor: '#E5E7EB',
                    padding: 12,
                    cornerRadius: 8,
                }
            }
        }
    });
