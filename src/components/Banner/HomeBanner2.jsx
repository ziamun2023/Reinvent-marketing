import React, { useEffect } from 'react';

const HomeBanner2 = () => {
    useEffect(() => {
        const container = document.querySelector('.container');
        const listItems = document.querySelectorAll('.list-item');
    
        container.addEventListener('scroll', () => {
          const containerTop = container.scrollTop;
          const containerBottom = containerTop + container.clientHeight;
    
          listItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            const itemTop = rect.top + containerTop;
            const itemBottom = rect.bottom + containerTop;
    
            if (itemTop < containerTop || itemBottom > containerBottom) {
              if (!item.classList.contains('fade-out-top') && !item.classList.contains('fade-out-bottom')) {
                if (itemTop < containerTop) {
                  item.classList.add('fade-out-top');
                } else {
                  item.classList.add('fade-out-bottom');
                }
              }
            } else {
              item.classList.remove('fade-out-top');
              item.classList.remove('fade-out-bottom');
            }
          });
        });
      }, []);
    
    return (
        <div class="container">
        <div class="list">
          <div class="list-item">List Item 1</div>
          <div class="list-item">List Item 2</div>
          <div class="list-item">List Item 3</div>
          <div class="list-item">List Item 4</div>
          <div class="list-item">List Item 5</div>
          <div class="list-item">List Item 6</div>
          <div class="list-item">List Item 7</div>
          <div class="list-item">List Item 8</div>
          <div class="list-item">List Item 9</div>
          <div class="list-item">List Item 10</div>
        </div>
      </div>
    );
};

export default HomeBanner2;