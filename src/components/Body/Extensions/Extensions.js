import Extension from "./Extension/Extension";
import extensionsData from "./extensionsData.json";
import classes from "./Extensions.module.css";

const Extensions = () => {
  return (
    <div className={classes.extensions}>
      <div className={classes.textBox}>
        <h2 className={classes.title}>Download the extension</h2>
        <p className={classes.paragraph}>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div className={classes.extensionsBox}>
        {extensionsData.map((extension, index) => (
          <Extension
            key={index}
            index={index}
            browser={extension.browser}
            version={extension.version}
          />
        ))}
      </div>
    </div>
  );
};

export default Extensions;
