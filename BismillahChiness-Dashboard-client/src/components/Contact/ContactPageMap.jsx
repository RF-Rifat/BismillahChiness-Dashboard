const ContactPageMap = () => {
  return (
    <>
      <div className="col-span-12">
        <div className="box xl:p-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d1094763.58260475!2d88.77859786224056!3d25.67041778537793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d25.631213199999998!2d88.6439757!4m3!3m2!1d25.6339658!2d88.6225965!5e0!3m2!1sen!2sbd!4v1707154249838!5m2!1sen!2sbd"
            width="100%"
            height={450}
            className="rounded-xl border border-n30 dark:border-n500"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </>
  );
};

export default ContactPageMap;
