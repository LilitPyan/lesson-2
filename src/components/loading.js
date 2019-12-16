import React from "react";
import loading from "../../src/assets/images/ajax-loading-gif-transparent-background-8.gif";

const sizes = {
    xs: 16,
    sm: 30,
    md: 82,
    lg: 150,
    xl: 250,
};

export default ({ centered = false, visible = true, right = false, size = "sm", mT = 0, mR = 0, mB = 0, mL = 0 }) => {
    if (!visible) {
        return null;
    }

    let imgSize = null;
    if (sizes.hasOwnProperty(size)) {
        imgSize = sizes[size];
    } else if (typeof size == "number") {
        imgSize = size;
    }

    const styles = {
        width: imgSize + "px",
        height: imgSize + "px",
        marginTop: mT,
        marginRight: mR,
        marginBottom: mB,
        marginLeft: mL,
    };

    if (centered) {
        styles.marginRight = "auto";
        styles.marginLeft = "auto";
        styles.display = "block";
    }

    return (
        <div className={`loading-image
            ${right ? "loading-right" : ""}
            ${centered ? "loading-center" : ""}
        `}>
            <img draggable={false} src={loading} width={imgSize} height={imgSize} style={styles} />
        </div>
    );
}