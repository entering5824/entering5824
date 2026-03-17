export function FeaturedProject() {
  return (
    <section className="section" aria-labelledby="featured-heading">
      <h2 id="featured-heading" className="section__title">Featured Project</h2>
      <div className="section__content">
        <h3 className="card__title">Vietnamese Speech-to-Text System</h3>
        <p>
          Mô hình sử dụng Whisper do phù hợp với tài nguyên hạn chế và dễ triển khai.
          Các vấn đề kỹ thuật đã xử lý:
        </p>
        <ul className="card__list">
          <li>Nhận diện tiếng lóng genz</li>
          <li>Sai lệch khi tách câu</li>
          <li>Giới hạn cấu hình máy</li>
          <li>Tối ưu để deploy miễn phí</li>
        </ul>
        <p>
          Dự án thực hiện theo nhóm, nhưng phần lớn logic xử lý và triển khai do tôi đảm nhiệm.
        </p>
        <p>
          Tôi không coi đây là dự án hoàn hảo.
          Tôi coi nó là minh chứng rằng tôi có thể đưa một hệ thống từ ý tưởng đến môi trường sử dụng thực tế.
        </p>
      </div>
    </section>
  );
}
