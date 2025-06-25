let highestZ = 1;

class Paper {
    holdingPaper = false;
    prevMouseX = 0;
    prevMouseY = 0;
    mouseX = 0;
    mouseY = 0;
    velocityX = 0;
    velocityY = 0;
    currentPaperX = 0;
    currentPaperY = 0;

    init(paper) {
        paper.addEventListener('mousedown', (e) => {
            this.holdingPaper = true;

            paper.style.zIndex = highestZ++;
            
            if (e.button === 0) {
                this.prevMouseX = e.clientX;
                this.prevMouseY = e.clientY;
            }
        });

        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;

            this.velocityX = this.mouseX - this.prevMouseX;
            this.velocityY = this.mouseY - this.prevMouseY;

            if (this.holdingPaper) {
                this.currentPaperX += this.velocityX;
                this.currentPaperY += this.velocityY;

                this.prevMouseX = this.mouseX;
                this.prevMouseY = this.mouseY;

                paper.style.transform = `translate(${this.currentPaperX}px, ${this.currentPaperY}px)`;
            }
        });

        window.addEventListener('mouseup', () => {
            this.holdingPaper = false;
            console.log('mouse button is released');
        });
    }
}

const papers = Array.from(document.querySelectorAll('.paper'));
papers.forEach(paperEl => {
    const p = new Paper();
    p.init(paperEl);
});




document.addEventListener("DOMContentLoaded", () => {
  const loveBtn = document.getElementById('loveButton');
  const popup = document.getElementById('popup');
  const closeBtn = popup.querySelector('button');

  loveBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });
});


const music = document.getElementById('bg-music');
const toggleBtn = document.getElementById('music-toggle');

let isPlaying = false;

toggleBtn.addEventListener('click', () => {
    if (!isPlaying) {
        music.play();
        toggleBtn.textContent = '⏸️ Pause Music';
    } else {
        music.pause();
        toggleBtn.textContent = '🔊 Play Music';
    }
    isPlaying = !isPlaying;
});


